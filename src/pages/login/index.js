import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

// import { useGetProfile } from '../../hooks/use-get-profile';

import Modal from 'react-modal';
import { StyledAuthContainer, StyledCenterContainer, StyledForm, StyledSignUpButton, StyledDescriptionBottomText, StyledDescriptionTopText } from './style';

export default function Login() {
  // const { user, isLoading } = useGetProfile();
  const { pathname } = useLocation();
  const isLogin = pathname === '/login'; // true, false
  const history = useHistory();

  // if (isLoading) return <div />;
  // if (user) {
  //   history.replace('/');
  // }

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const { email, password } = inputs;
  const [modal, setModal] = useState(false);

  const onChange = (event) => {
    const { value, name } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onClickLogin = async () => {
    // if (isLoading) return;
    if (!email.length || !password.length) {
      alert('이메일이나 비밀번호를 전부 입력해주세요');
      return;
    }

    // setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      history.replace('/');
    } catch (e) {
      const error = e;
      if (error.code === 'auth/invalid-email') {
        alert('이메일이 유효하지 않습니다.');
      } else if (error.code === 'auth/wrong-password') {
        alert('비밀번호가 일치하지 않습니다.');
      } else if (error.code === 'auth/user-not-found') {
        alert('해당 이메일로 가입한 유저가 존재하지 않습니다.');
      }
    } finally {
      // setIsLoading(false);
    }
  };

  const onClickSendMail = async () => {
    await sendPasswordResetEmail(auth, email);
    setModal(false);
    alert('전송했습니다!');
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClickLogin();
    }
  };

  function isSmallScreen(){
    if (typeof window !== 'undefined') {
      return window.innerWidth < 800;
    }
    return false;
  }

  return (
    <StyledCenterContainer>
      <StyledAuthContainer isLogin={true}>
      <StyledDescriptionTopText color='red'>KUCC</StyledDescriptionTopText>
      <StyledDescriptionTopText color='black'>길라잡이</StyledDescriptionTopText>
      {true && (
        <StyledDescriptionBottomText>
          고려대학교 중앙 컴퓨터 동아리
          <br />
          세션/스터디 관리 시스템
        </StyledDescriptionBottomText>
      )}

        <StyledForm>
          <AuthInputWithLabel
            inputName='email'
            inputType='email'
            value={email}
            placeholder='이메일'
            onChange={onChange}
          />
          <AuthInputWithLabel
            inputName='password'
            inputType='password'
            value={password}
            placeholder='비밀번호'
            onChange={onChange}
            onKeyPress={onKeyPress}
          />
          <LoadingButton
            onClick={onClickLogin}
            style={{
              width: '220px',
              height: '52px',
              fontSize: '16px',
              marginTop: 120,
            }}
            text='LOGIN'
            // isLoading={isLoading}
            isLoading={true}
            isActive={true}
          />
          <StyledSignUpButton to='/signup'>JOIN</StyledSignUpButton>
          <div
            style={{
              marginTop: 30,
              fontSize: 12,
              color: GRAY,
              textAlign: 'center',
              cursor: 'pointer',
            }}
            onClick={() => setModal(true)}>
            비밀번호를 잊어버리셨나요?
            <br />
            <span style={{ textDecoration: 'underline' }}>가입했던 이메일</span>로 재설정 문자 보내기
          </div>
        </StyledForm>
        <Modal
          ariaHideApp={false}
          isOpen={modal}
          onRequestClose={() => setModal(false)}
          style={{
            overlay: {
              position: 'fixed',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: 'rgba(69, 68, 68, 0.75)',
              zIndex: '99',
            },
            content: {
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgba(255, 255, 255, 0.75)',
              width: isSmallScreen() ? '80%' : '40%',
              height: 300,
              zIndex: '100',
            },
          }}>
          <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 30 }}>이메일 전송하기</div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <input
              value={email}
              placeholder='이메일'
              onChange={onChange}
              style={{ border: 'none', height: 30, paddingLeft: 10, borderRadius: 10, width: 300 }}
            />
            <button
              onClick={onClickSendMail}
              style={{
                border: 'none',
                padding: '10px 20px',
                backgroundColor: RED,
                color: WHITE,
                width: 'fit-content',
                marginTop: 20,
              }}>
              전송하기
            </button>
          </div>
        </Modal>
      </StyledAuthContainer>
    </StyledCenterContainer>
  );
};
