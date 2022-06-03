/** @jsx jsx */
import { jsx, Box, Heading, Text, Button, Link } from 'theme-ui';

export default function TextFeature({
  subTitle,
  title,
  description,
  description2,
  btnName,
  btnURL = '#',
}) {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.wrapper}>
        <Text as="p" sx={styles.wrapper.subTitle}>
          {subTitle}
        </Text>
        <Heading as="h2" sx={styles.wrapper.title}>
          {title}
        </Heading>
      </Box>

      {description && (
        <Text as="p" className="description" sx={styles.description}>
          {description}
        </Text>
      )}

      {description2 && (
        <Text as="p" className="description" sx={styles.description}>
          {description2}
        </Text>
      )}

      {btnName && (
        <a href={btnURL} >
          <Button variant="primary" aria-label={btnName}>
            {btnName}
          </Button>
        </a>
      )}
    </Box>
  );
}

const styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexShrink: 0,
    a: {
      m: ['0 auto', null, null, 0],
    },
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: 3,
    subTitle: {
      fontSize: [0, null, 1],
      color: 'primary',
      TextAlign:'center',
      textTransform: 'uppercase',
      fontWeight: '700',
      mb: [2, 3],
      lineHeight: 1.5,
      letterSpacing: ['1.5px', null, '2px'],
    },
    title: {
      fontSize: ['20px', null, '20px', '24px', '30px', '32px', null, '40px'],
      color: 'heading_secondary',
      lineHeight: [1.3, null, null, null, 1.2],
      fontWeight: '700',
      TextAlign:'center',
      letterSpacing: '-.5px',
      mb: 5,
    },
  },
  description: {
    fontSize: ['15px', 2, null, null, null, '17px', null, 3],
    fontWeight: 400,
    textAlign:'justify',
    lineHeight: [1.85, null, null, 2, null, '2.2'],
    color: 'text_secondary',
    mb: '30px',
  },
};
