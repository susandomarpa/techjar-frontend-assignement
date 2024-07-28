interface loginProps {
  email: string,
  password: string
}

const mockCredentials = {
  email: 'test@test.com',
  password: 'password123'
};

export const login = ({email, password}: loginProps) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === mockCredentials.email && password === mockCredentials.password) {
        resolve({ success: true });
      } else {
        reject({ success: false, message: 'Invalid email or password' });
      }
    }, 1000);
  });
};
