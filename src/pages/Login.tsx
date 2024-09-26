import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormControl, Card, TextField, Button, View } from "reshaped";
import { Eye, EyeOff, Zap } from "react-feather";
import "reshaped/themes/reshaped/theme.css";
import { loginApi } from "@/api/loginApi/login";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const viewPassword = () => {
    setShowPassword(!showPassword);
  };

  const [userInfo, setUserInfo] = useState({
    memberId: "",
    memberPwd: ""
  })

  const handleChange = (e: { name: string; value: string }) => {
    const { name, value } = e;
    setUserInfo({
      ...userInfo,
      [name]: value
    })
  }

  const login = async () => {
    try {
      const res = await loginApi(userInfo);
      if(res.code === 20001)  navigate("/home");
      else return;
    }
    catch(err) {
      console.error(err);
    }
  };

  return (
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
              <Button onClick={viewPassword} icon={showPassword ? Eye : EyeOff} color={'media'} size={"small"} />
            }
          />
        </FormControl>

        {/* <FormControl.Helper>这里是状态提示</FormControl.Helper> */}

        <View align={"center"}><Button size="small" icon={Zap} onClick={login}> Login in </Button></View>
        </View>
    </Card>
  )
};

export default Login;
