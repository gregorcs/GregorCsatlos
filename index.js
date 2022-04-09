// JavaScript source code

const userAction = async () => {
    const response = await fetch('https://api.github.com/users/gregorcs/repos');
    const myJson = await response.json();
    console.log("hello");
}

