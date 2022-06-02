import Typewriter from 'typewriter-effect';

export default function WelcomeText() {

    return (
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('FINISH THIS LATER')
                .pauseFor(1000)
                .typeString(' WELCOME TO MY <strong><span style="color: #27ae60;">SITE</span></strong>.')
                .deleteChars(5)
                .typeString("WEBSITE.")
                .pauseFor(1400)
                .deleteChars(8)
                .typeString("PORTFOLIO.")
                .start();
            }}
          />
    );
  }