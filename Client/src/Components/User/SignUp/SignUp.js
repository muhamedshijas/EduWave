import React, { useState } from "react";
import signUpImage from "../../../assets/images/main-image.png";
import "./SignUp.css";
import { IoIosMail } from "react-icons/io";
import loginImage from "../../../assets/images/loginImage.png";
import { FaUserLock } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaMobileButton } from "react-icons/fa6";
import { GiConfirmed } from "react-icons/gi";
import { MdOutlineFileOpen } from "react-icons/md";
import {
  Box,
  Button,
  FormControl,
  Input,
  Image,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Heading,
  Text,
  FormErrorMessage,
} from "@chakra-ui/react";
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState();
  const [show, setShow] = useState(false);
  const [cPassword, setCPassword] = useState("");
  function handleShow() {
    setShow(!show);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    let { data } = await axios.post("/user/login", { email, password });
  }

  const nameErr=name===""
  const emailErr=name===""
  const passwordErr=password!==cPassword
  const phoneErr= phone===""
  return (
    <Box
      w="100%"
      h="100vh"
      bg="blue"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        h="60%"
        p="4"
        w="60%"
        bg="#fff"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box h="100%" w="90%">
          <Image src={loginImage} />
        </Box>

        <FormControl>
          <Stack spacing={4}>
            <Text display="flex" fontSize="4xl" justifyContent="space-between"  w="55%" alignItems="center">
            <MdOutlineFileOpen style={{color:"blue"}} />
              <Heading>User Sign Up</Heading>
            </Text>
            <InputGroup>
              <Input
                variant="flushed"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <InputLeftElement pointerEvents="none">
                <FaUser />
              </InputLeftElement>
             {
              nameErr&& <FormErrorMessage>
              Name is requierd
              </FormErrorMessage>
             }
            </InputGroup>
            <InputGroup>
              <Input
                variant="flushed"
                placeholder=" Enter Your Email"
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
                placeholder="Enter Your mobile No"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
              <InputLeftElement pointerEvents="none">
                <FaMobileButton />
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

            <InputGroup>
              <Input
                variant="flushed"
                placeholder="Password"
                type={show ? "text" : "password"}
                value={cPassword}
                onChange={(e) => {
                  setCPassword(e.target.value);
                }}
              />
              <InputLeftElement pointerEvents="none">
                <GiConfirmed />
              </InputLeftElement>

              <InputRightElement onClick={handleShow}>
                {show ? <FaRegEyeSlash /> : <FaRegEye />}
              </InputRightElement>
            </InputGroup>

            <Button w="100%" colorScheme="green" onClick={handleSubmit}>
              Submit
            </Button>
          </Stack>
        </FormControl>
      </Box>
    </Box>
  );
}

export default SignUp;
