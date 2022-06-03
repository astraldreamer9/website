/** @jsx jsx */
import { jsx } from 'theme-ui';
import { motion } from 'framer-motion';

export const AccordionButton = ({ children, ...rest }) => (
  <div
    css={{
      display: 'flex',
      alignItems: 'center',
      color: '#2563FF',
      cursor: 'pointer',
      fontSize: '20px',
      fontWeight: '500',
      border: 'none',
      paddingTop: '20px',
      paddingBottom: '20px',
      paddingLeft: '32px',
      position: 'relative',
      '@media(min-width: 768px)': {
        fontSize: '20px',
        paddingLeft: '45px',
      },

      ':focus': {
        outline: 'none',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
      },
      span: {
        position: 'absolute',
        top: '50%',
        left: '0px',
        transform: 'translateY(-50%)',
        backgroundColor: '#800080',
        width: '20px',
        height: '20px',
        display: 'flex',
        alignItems: 'center',
        fontSize: '20px',
        justifyContent: 'center',
        borderRadius: '50%',
        color: '#fff',
        marginRight: '15px',
        '@media(min-width: 768px)': {
          left: '15px',
        },
        '@media(max-width: 375px)': {
          top: 25,
          transform: 'translate(0)',
        },
      },
    }}
    {...rest}
  >
    {children}
  </div>
);

const variants = {
  open: {
    //maxHeight: 'auto',
    height: 'auto',
    marginBottom: 30,
  },
  closed: { height: 0, marginTop: 0, marginBottom: 0 },
};
export function AccordionContents({ isOpen, ...props }) {
  return (
    <motion.div
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      css={{
        overflowY: 'hidden',
        fontSize: 20,
        paddingLeft: 32,
        lineHeight: '30px',
        color: '#fff',
        '@media(min-width: 1200x)': {
          paddingLeft: 45,
          lineHeight: '32px',
        },
      }}
      {...props}
    />
  );
}

export const AccordionItem = ({ isOpen, children, ...rest }) => (
  <div
    css={{
      borderRadius: 0,
      marginBottom: 0,
      borderBottom: '1px solid #E5ECF4',
      padding: 0,
      overflow: 'hidden',
      '@media(max-width: 375px)': {
        paddingBottom: 15,
   
      },
    }}
    {...rest}
  >
    {children}
  </div>
);

export const preventClose = (state, changes) =>
  changes.type === 'closing' && state.openIndexes.length < 2
    ? { ...changes, openIndexes: state.openIndexes }
    : changes;

export const single = (state, changes) =>
  changes.type === 'opening'
    ? { ...changes, openIndexes: changes.openIndexes.slice(-1) }
    : changes;

export const combineReducers = (...reducers) => (state, changes) =>
  reducers.reduce((acc, reducer) => reducer(state, acc), changes);