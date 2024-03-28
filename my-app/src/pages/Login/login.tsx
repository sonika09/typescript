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
} from "@chakra-ui/react";
import styles from "@/styles/Login.module.css";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Router } from "next/router";
import Link from "next/link";
function Login() {

// const handleNext=() => {
//   console.log('hello')
//   // Router.push('/Signup')
// }

  return (
    <div className={styles.loginContainer}>
      <Box>
        <FormControl  className={styles.form}>
          <FormHelperText color="black" fontSize={30} fontWeight='bold'>
            Lets Begin Here!
          </FormHelperText>
          <FormHelperText color="black" fontSize={25}>
            Are you Employee or a Recruiter!
          </FormHelperText>
          <RadioGroup>
            <Stack direction="row" color="black" className={styles.radioButton}>
              <Radio value="1">Employee</Radio>
              <Radio value="2">Recruiter</Radio>
            </Stack>
          </RadioGroup>
          <Link href='/Signup'>
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="blue"
            variant="outline"
            className={styles.next}
            // onClick={handleNext}
          >   Next         
          </Button></Link>
        </FormControl>
      </Box>
    </div>
  );
}

export default Login;
