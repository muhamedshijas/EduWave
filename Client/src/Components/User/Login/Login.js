import React, { useState } from "react";
import { FaUserLock } from "react-icons/fa";
import axios from "axios";
import loginImage from "../../../assets/images/loginImage.png";
import { IoIosMail } from "react-icons/io";
import "./Login.css";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Text,
} from "@chakra-ui/react";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  function handleShow() {
    setShow(!show);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    let { data } = await axios.post("/user/login", { email, password });
  }
  return (
    <div>
      <section className="login-main">
        <div className="login">
          <div className="login-image">
            <img src={loginImage} alt="" srcset="" />
          </div>
          <div className="login-form">
            <Box
              w="100%"
              h="70%"
              display="flex"
              flexDirection="column"
              justifyContent="around"
              alignItems="center"
            >
              <Text>
                <Heading>User Login</Heading>
              </Text>
              <FormControl
                w="80%"
                display="flex"
                flexDirection="column"
                justifyContent="space-around"
                h="80%"
              >
                <InputGroup>
                  <Input
                    variant="flushed"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <InputLeftElement pointerEvents="none">
                    <IoIosMail />
                  </InputLeftElement>
                </InputGroup>

                <InputGroup>
                  <Input
                    variant="flushed"
                    placeholder="Password"
                    type={show ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <InputLeftElement pointerEvents="none">
                    <FaUserLock />
                  </InputLeftElement>

                  <InputRightElement onClick={handleShow}>
                    {show ? <FaRegEyeSlash /> : <FaRegEye />}
                  </InputRightElement>
                </InputGroup>

                <Button w="100%" colorScheme="green" onClick={handleSubmit}>
                  Submit
                </Button>
              </FormControl>

              <Text as="b">
                Dont you have an acount
                <Link color="blue.500" href="/signup">
                  {" "}
                  Sign Up here
                </Link>
              </Text>
            </Box>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
