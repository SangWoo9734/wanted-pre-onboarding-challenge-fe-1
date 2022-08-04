import axios, { AxiosError } from "axios";

interface Data {
  message?: string;
  token: string;
  details?: string;
}

interface ServerError {
  details: string;
}

const login = async (email: string, password: string) => {
  try {
    const response = await axios.post<Data>("http://localhost:8080/users/login", {
      email,
      password,
    });

    return { status: response.status, ...response.data };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error as AxiosError<ServerError>;
      if (serverError && serverError.response) {
        return { status: serverError.response.status, token: "", ...serverError.response.data };
      }
    }
    return { status: 500, details: "잘못된 로그인 방식입니다.", token: "" };
  }
};

const signUp = async (email: string, password: string) => {
  try {
    const response = await axios.post<Data>("http://localhost:8080/users/create", {
      email,
      password,
    });

    return { status: response.status, ...response.data };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error as AxiosError<ServerError>;
      if (serverError && serverError.response) {
        return { status: serverError.response.status, token: "", ...serverError.response.data };
      }
    }
    return { status: 500, details: "잘못된 회원가입 방식입니다.", token: "" };
  }
};

export { login, signUp };
