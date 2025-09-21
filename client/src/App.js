import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import ConfirmationPage from './ConfirmationPage';
import LookupPage from './LookupPage';
import SignupPage from './SignupPage'; 
import LoginPageV2 from './LoginPageV2';

function App() {
    // ★ 自動ログインチェック処理（React Router v6 では navigate を使う）
  useEffect(() => {
    axios.get('http://localhost:5000/api/session', { withCredentials: true })
      .then(res => {
        if (res.data.loggedIn) {
          console.log("自動ログイン成功:", res.data.username);
          // 例: 自動的にホームに遷移させたい場合
          // navigate('/home'); ← Router外なので、ここではできない
        }
      })
      .catch(err => {
        console.log("セッション確認失敗", err);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/confirm" element={<ConfirmationPage />} />
        <Route path="/lookup" element={<LookupPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login-v2" element={<LoginPageV2 />} />
      </Routes>
    </Router>
  );
}

export default App;
