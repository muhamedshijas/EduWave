import React, { useState } from "react";
import { FaUserLock } from "react-icons/fa";
import axios from "axios";
import loginImage from "../../../assets/images/second-image.png";
import { IoIosMail } from "react-icons/io";
import "./Login.css";
import { MDBInput } from "mdb-react-ui-kit";
import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text
} from "@chakra-ui/react";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
            <Box w="100%" h="60%" display="flex" flexDirection="column" justifyContent="around" alignItems="center" >
            <Text>
            <Heading>User Login</Heading>
            </Text>
              <FormControl w="80%" display="flex" flexDirection="column" justifyContent="space-around" h="80%">
                <InputGroup>
                  <Input variant="flushed" placeholder="Email" />
                  <InputLeftElement pointerEvents="none">
                    <IoIosMail />
                  </InputLeftElement>
                </InputGroup>

                <InputGroup>
                  <Input variant="flushed" placeholder="Password" />
                  <InputLeftElement pointerEvents="none">
                    <FaUserLock />
                  </InputLeftElement>
                </InputGroup>

                <Button w="100%" colorScheme="green">Submit</Button>
              </FormControl>
            </Box>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
