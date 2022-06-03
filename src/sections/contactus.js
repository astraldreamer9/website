/** @jsx jsx */
import { useRef, useState } from 'react';
// import styles from "../styles/Home.module.css"
import fetch from 'isomorphic-unfetch';
import { jsx } from 'theme-ui';
import { Container, Flex, Box, Button, Input, Text, Heading } from 'theme-ui';

export default function Contactus() {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  //const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => { 
    e.preventDefault()
    console.log('Sending')
    
    let data = {
      fullname,
      email,
      message
    }
    console.log('past data');

    fetch('api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => {
          console.log('Response received')
          if (res.status === 200) {
              console.log('Response succeeded!')
              setSubmitted(true) 
              setFullname('')
              setEmail('')
              setMessage('')
          }
      })
      console.log('past fetch');
    };

  return (
    <section id="contactus">
      <Container>
        <Box sx={styles.contentBox}>
          <Box sx={styles.contentBoxInner}>
            <Heading as="h2" sx={styles.title}>
              Contact Us
            </Heading>
            <Text as="p" sx={styles.description}> Send us a messasge</Text>
            <form >
              <Flex sx={styles.subscribeForm}>
                <label htmlFor="fullname" sx={{ variant: 'styles.srOnly' }}> Full Name </label>
                <Input id="fullname" name="fullname" type="text" placeholder="Enter your full name" required value={fullname} onChange={(e) => {setFullname(e.target.value); }}/>
              </Flex>

              <Flex sx={styles.subscribeForm}>
                <label htmlFor="email" sx={{ variant: 'styles.srOnly' }}> Email Address </label>
                <Input id="email" name="email" type="email" placeholder="Enter your email address" required value={email} onChange={(e) => {setEmail(e.target.value); }}/>
              </Flex>

              <Flex sx={styles.subscribeForm}>
                <label htmlFor="message" sx={{ variant: 'styles.srOnly' }}> Enter Message</label>

                <textarea sx={styles.textarea} id="message" type="text" name="message" rows="7" cols="65" placeholder="Enter your message" required value={message} onChange={(e) => { setMessage(e.target.value); }}></textarea>
              </Flex>

              <Flex sx={styles.subscribeForm2}>
                <Button
                  type="submit"
                  onClick={(e)=>{handleSubmit(e)}}
                  className="subscribe__btn"
                > 
                Submit Message
                </Button>
              </Flex>

            </form>
          </Box>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  contentBox: {
    backgroundColor: 'black',
    textAlign: 'center',
    borderRadius: 10,
    py: ['60px', null, 8],
  },
  contentBoxInner: {
    width: ['100%', null, '540px', '600px'],
    mx: 'auto',
    mt: -1,
    px: [3, 5],
  },
  title: {
    fontSize: ['24px', null, '28px', null, null, '32px', null, '36px'],
    color: 'white',
    lineHeight: [1.3, null, null, 1.25],
    fontWeight: '700',
    letterSpacing: ['-.5px', null, '-1.5px'],
    mb: [3, 5],
    mt: [5, 8],
  },
  description: {
    fontSize: ['15px', 2, null, null, null, '17px', null, 3],
    color: 'white',
    lineHeight: [1.85, null, null, 2],
    px: [0, null, 5],
  },
  subscribeForm: {
    mt: [2, null, null, 2],
    backgroundColor: ['transparent', 'black'],
    borderRadius: [0, 10],
    overflow: 'hidden',
    p: [1, 1],
    flexDirection: ['column', 'row'],
    '[type="email","input"]': {
      border: 0,
      borderRadius: 50,
      fontFamily: 'body',
      fontSize: ['16px', null, 2],
      fontWeight: 500,
      color: 'black',
      py: 1,
      px: [4, null, 6],
      backgroundColor: ['white', 'transparent'],
      height: ['52px', null, '60px'],
      textAlign: ['left', 'left'],
      '&:focus': {
        boxShadow: '0 0 0 0px',
      },
      '::placeholder': {
        color: 'black',
        opacity: 1,
      },
    },
    '.subscribe__btn': {
      flexShrink: 0,
      ml: [0, 2],
      backgroundColor: ['text', 'primary'],
      mt: [2, 0],
      py: ['15px'],
    },
  },
  textarea: {
    mt: [2, null, null, 2],
    backgroundColor: ['transparent', 'black'],
    borderRadius: [15, 10],
    overflow: 'hidden',
    borderColor: 'white',
    p: [1, 2],
    flexDirection: ['column', 'row'],
    border: ['3px', 'solid', 'purple'],
    outlineStyle: 'solid',
    outlineColor: 'white',
    outlineWidth: '1px',
    fontFamily: 'body',
    fontSize: ['18px', null, 3],
    fontWeight: 500,
    color: 'white',
    py: 1,
    height: ['100px', null, '120px'],
    textAlign: ['left', 'left'],
    '&:focus': {
      boxShadow: '0 0 0 0px',
      outlineStyle: 'solid',
      outlineColor: 'purple',
      outlineWidth: '1px',
      boxshadow: [0, 0, '10px', 'purple'],
    },
  },
  subscribeForm2: {
    mt: [5, null, null, 3],
    backgroundColor: ['transparent', 'black'],
    borderRadius: [0, 50],
    overflow: 'hidden',
    p: [0, 1],
    flexDirection: ['column', 'row'],
    '[type="email"]': {
      border: 1,
      borderRadius: 50,
      borderColor: 'purple',
      fontFamily: 'body',
      fontSize: ['20px', null, 2],
      fontWeight: 500,
      color: 'heading',
      py: 1,
      px: [4, null, 6],
      //backgroundColor: ['black', 'transparent'],
      height: ['52px', null, '60px'],
      textAlign: ['center', 'center'],
      '&:focus': {
        boxShadow: '0 0 0 0px',
      },
      '::placeholder': {
        color: 'primary',
        opacity: 1,
      },
    },
    '.subscribe__btn': {
      flexShrink: 0,
      backgroundColor: ['primary', 'primary'],
      my: [3, 0],
      py: ['15px'],
      justifyContent: 'center',
      alignItems: 'center',
      mx: 'auto',
      '&:hover': {
        boxShadow: '0 0 0 0px',
        backgroundColor: ['transparent', 'transparent'],
        outlineStyle: 'solid',
        outlineColor: 'purple',
        outlineWidth: '2px',
      },
    },
  },
};
