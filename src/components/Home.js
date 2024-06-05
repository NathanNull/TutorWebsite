import { createUseStyles } from 'react-jss';
import Header from './Header.js';
import { useGlobalStyles } from '../styles.js';
import Footer from './Footer.js';

function Home() {
    const styles = useStyles();
    const gStyles = useGlobalStyles();
    return (
        <>
            <Header>
                <div className={gStyles.titleText}>
                    Focus Tutoring
                </div>
                <a href="#/services" className={styles.learnMoreButton}>Learn More</a>
            </Header>
            <div className={gStyles.content}>
                I'll put some text here that talks about what I do
            </div>
            <Footer />
        </>
    );
}

const useStyles = createUseStyles({
    learnMoreButton: {
        textAlign: 'center',
        color: 'grey',
        fontFamily: 'monospace',
        textTransform: 'uppercase',
        fontSize: 30,
        textDecoration: 'none',
        padding: 10,
        marginTop: 10,
        border: {
            color: 'grey',
            width: 2,
            style: 'solid',
        },
        '&:hover': {
            backgroundColor: 'grey',
            color: 'white',
        },
    },
})

export default Home;