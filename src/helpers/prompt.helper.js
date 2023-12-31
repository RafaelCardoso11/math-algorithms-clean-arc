
import readline from 'readline';

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const prompt = async (question) => {
  return new Promise((resolve) => {
    rl.question(question, (value) => {
      resolve(value);
    });
  });
};
