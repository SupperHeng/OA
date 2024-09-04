import React, { useState } from 'react';
import { Reshaped, FormControl, Card, TextField, Button, Icon, Checkbox } from 'reshaped';
import { Eye, EyeOff, Zap } from 'react-feather';
import 'reshaped/themes/reshaped/theme.css';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const pageBox = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    backgroundColor: "#f0f2f5",
  };

  // 查看密码
  const viewPassword = () => {
    console.log('Password visibility toggled');
    setShowPassword(!showPassword);
  };

  // 路由跳转
  const jumpToLogin = () => {
    navigate('/home');
  };

  return (
    <div style={pageBox}>
      <Reshaped theme="reshaped">
        <Card padding={{
          s: 4,
          m: 8
        }}>
          <FormControl>
            <div style={{
              display: 'grid',
              gap: '10px',
            }}>
              <div>
                <FormControl.Label>username</FormControl.Label>
                <TextField name="name" placeholder="Enter your name" />
                <FormControl.Helper>这里是状态提示</FormControl.Helper>
              </div>
              <div>
                <FormControl.Label>password</FormControl.Label>
                <TextField
                  name="password"
                  inputAttributes={{ type: showPassword ? "text" : "password" }}
                  placeholder="Enter your password"
                  endSlot={
                    <div onClick={viewPassword} >
                      <Icon size="autoWidth" svg={showPassword ? Eye : EyeOff} />
                    </div>
                  }
                />
                <FormControl.Helper>这里是状态提示</FormControl.Helper>
              </div>
              <div>
                <Checkbox name="keepSigned">
                  Keep me signed in
                </Checkbox>
              </div>
              <div style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Button size='small' icon={Zap} onClick={jumpToLogin}>Login in</Button>
              </div>
            </div>
          </FormControl>
        </Card>
      </Reshaped>
    </div>
  );
};

export default Login;