import React from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Box,
  Container,
  RadioGroup,
  Radio,
  Stack,
  Button,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import Link from "next/link";
import styles from "@/styles/Signup.module.css";
import { ArrowForwardIcon, EmailIcon } from "@chakra-ui/icons";

function SignUp() {
  const [show, setShow] = React.useState(false);

  const handleClick = () => setShow(!show);

  return (
    <div className={`${styles.signupContainer}`}>
      <Box>
        <FormControl className={styles.form}>
          <FormHelperText color="black" fontSize={30} fontWeight="bold">
            Create Your Account!
          </FormHelperText>
          <FormHelperText color="black" fontSize={15} className={styles.label}>
            Enter Email Address
          </FormHelperText>
          <Box className={styles.inputBox}>
            <InputGroup className={styles.input}>
              <InputLeftElement pointerEvents="none">
                <EmailIcon color="black.300" />
              </InputLeftElement>
              <Input type="email" placeholder="enter email address" />
            </InputGroup>
            <FormHelperText
              color="black"
              fontSize={15}
              className={styles.label}
            >
              Enter Password
            </FormHelperText>
            <InputGroup size="md" className={styles.input}>
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormHelperText
              color="black"
              fontSize={15}
              className={styles.label}
            >
              Confirm Password
            </FormHelperText>
            <InputGroup size="md" className={styles.input}>
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Link href="/apply-for-job">
              <Button
                rightIcon={<ArrowForwardIcon />}
                colorScheme="blue"
                variant="outline"
                className={styles.next}
              >
                Next
              </Button>
            </Link>
          </Box>
        </FormControl>
      </Box>
    </div>
  );
}

export default SignUp;
