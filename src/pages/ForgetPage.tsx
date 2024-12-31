import React, { useState } from 'react';
import { AuthTemplate } from '../components/AuthTemplate';
import {
  Input,
  Form,
  Footer,
  Button,
  ErrorMessage,
} from '@src/styles/common.styles';
import { useDispatch } from 'react-redux';
import { AppDispatchType } from '@src/redux/store';
import { useNavigate, Link } from 'react-router-dom';
import Loader from '../components/Misc/Loader';
import PopupModal from '@src/components/Misc/PopupModal';
import { forgetPassword, resetPassword } from '@src/redux/slices/userSlice';
import { useIntl } from 'react-intl';

const ForgetPage: React.FC = () => {
  const intl = useIntl();
  const dispatch = useDispatch<AppDispatchType>();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const data = await dispatch(forgetPassword({ email })).unwrap();
      if (data.status) {
        setIsEmailSubmitted(true);
      } else {
        setErrorMessage(
          data.message || intl.formatMessage({ id: 'forgetPasswordError' })
        );
      }
    } catch (err: any) {
      setErrorMessage(
        err.message || intl.formatMessage({ id: 'unexpectedError' })
      );
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const data = await dispatch(
        resetPassword({
          email,
          currentPassword,
          password: newPassword,
          confirmPassword,
        })
      ).unwrap();

      if (data.status) {
        setIsSuccessModalOpen(true);
      } else {
        setErrorMessage(
          data.message || intl.formatMessage({ id: 'resetPasswordError' })
        );
      }
    } catch (err: any) {
      setErrorMessage(
        err.message || intl.formatMessage({ id: 'unexpectedError' })
      );
    } finally {
      setLoading(false);
    }
  };

  const handleModalClose = () => {
    setIsSuccessModalOpen(false);
    navigate('/login');
  };

  return (
    <AuthTemplate
      title={
        isEmailSubmitted
          ? intl.formatMessage({ id: 'resetPassword' })
          : intl.formatMessage({ id: 'forgetPassword' })
      }
    >
      {loading && <Loader text={intl.formatMessage({ id: 'processing' })} />}{' '}
      {/* Show loader when loading */}
      {!isEmailSubmitted ? (
        <Form onSubmit={handleEmailSubmit}>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}{' '}
          {/* Display error message */}
          <Input
            type="email"
            placeholder={intl.formatMessage({ id: 'enterEmail' })}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit" disabled={loading}>
            {loading
              ? intl.formatMessage({ id: 'submitting' })
              : intl.formatMessage({ id: 'submitEmail' })}
          </Button>
        </Form>
      ) : (
        <Form onSubmit={handlePasswordReset}>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}{' '}
          {/* Display error message */}
          <Input
            type="password"
            placeholder={intl.formatMessage({ id: 'currentPassword' })}
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder={intl.formatMessage({ id: 'newPassword' })}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder={intl.formatMessage({ id: 'confirmNewPassword' })}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button type="submit" disabled={loading}>
            {loading
              ? intl.formatMessage({ id: 'resetting' })
              : intl.formatMessage({ id: 'resetPassword' })}
          </Button>
        </Form>
      )}
      <Footer>
        {intl.formatMessage({ id: 'backToLogin' })}{' '}
        <Link to="/login">{intl.formatMessage({ id: 'login' })}</Link>
      </Footer>
      {isSuccessModalOpen && (
        <PopupModal
          isOpen={isSuccessModalOpen}
          onClose={handleModalClose}
          buttonText={intl.formatMessage({ id: 'ok' })}
          message={intl.formatMessage({ id: 'passwordResetSuccess' })}
        />
      )}
    </AuthTemplate>
  );
};

export default ForgetPage;
