/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import Member1 from 'assets/astradreamer/alex2.png';
import Member2 from 'assets/astradreamer/apolonia.webp';
import Member3 from 'assets/astradreamer/james.webp';

const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: 'Alexandra',
    title: 'Alexandra',
    designation: 'Creative. Editorial. Community Manager. Problem Solver.',
    socialProfile: [

      {
        id: 2,
        name: 'twitter',
        path: 'https://twitter.com/thenewllcdao?s=21&t=a7nweVVMPCdmRTi2aD0Hdg',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: 'https://instagram.com/alexandra_creative?utm_medium=copy_link',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: 'Apolonia',
    title: 'Apolonia',
    designation: 'Creative. Consultant. Engineer. Community Manager. Outreach/Research.',
    socialProfile: [

      {
        id: 2,
        name: 'twitter',
        path: 'https://twitter.com/artofficialapol?s=21&t=a7nweVVMPCdmRTi2aD0Hdg',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: 'https://instagram.com/artofficialapol',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: Member3,
    altText: 'James',
    title: 'James',
    designation: 'Creative. Digital Architect. Visionary. Artistic Innovator. MetaVerse Mastermind.',
    socialProfile: [

      {
        id: 1,
        name: 'twitter',
        path: 'https://twitter.com/jwmos4?s=21&t=a7nweVVMPCdmRTi2aD0Hdg',
        icon: <FaTwitter />,
      },
      {
        id: 2,
        name: 'instagram',
        path: 'https://www.instagram.com/jwmos_nft/',
        icon: <FaInstagram />,
      },
    ],
  },
  
];

export default function TeamSection() {
  return (
    <section id="team-section">
      <Container>
        <SectionHeader
          slogan="Our Team"
          title="Connect With Us On Social Media"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={`team--key${item.id}`}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
