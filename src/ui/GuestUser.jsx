import styled from "styled-components";

const GuestError = styled.div`
  color: red;
`;

export default function GuestUser() {
  return <GuestError>Guests Users are not able to see the full functionality of the app.</GuestError>;
}
