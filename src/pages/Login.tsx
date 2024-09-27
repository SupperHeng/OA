import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormControl, Card, TextField, Button, View } from "reshaped";
import { Eye, EyeOff, Zap } from "react-feather";
import "reshaped/themes/reshaped/theme.css";
import { loginApi } from "@/api/loginApi/login";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [userInfo, setUserInfo] = useState({
    memberId: "",
    memberPwd: ""
  })

  const [loginState, setLoginState] = useState({ state: "" })

  const viewPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e: { name: string; value: string }) => {
    const { name, value } = e;
    setUserInfo({
      ...userInfo,
      [name]: value
    })
  }

  const login = async () => {
    try {
      const { data: res } = await loginApi(userInfo);
      if (res.code === 20001) {
        localStorage.setItem("satoken", res.data.tokenValue);
        navigate("/home");
      }
      else setLoginState({ state: res.msg });
    }
    catch (err) {
      console.error(err);
    }
  };

  return (
    <View align="center" justify="center" width="100vw" height="100vh">
      <Card padding={6}>
        <View gap={3} direction="column">
          <FormControl>
            <FormControl.Label>username</FormControl.Label>
            <TextField name="memberId" id="username" placeholder="Enter your name" onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormControl.Label>password</FormControl.Label>
            <TextField
              name="memberPwd" id="password" placeholder="Enter your password"
              inputAttributes={{ type: showPassword ? "text" : "password" }} onChange={handleChange}
              endSlot={
                <Button icon={showPassword ? Eye : EyeOff} variant="ghost" size="small" onClick={viewPassword} />
              }
            />
            <FormControl.Helper>{loginState.state || "\u00A0"}</FormControl.Helper>
          </FormControl>
          <View align={"center"}><Button size="small" icon={Zap} onClick={login}> Login in </Button></View>
        </View>
      </Card>
    </View>
  )
};

export default Login;
