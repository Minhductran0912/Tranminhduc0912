function Football() {
    const shoot = () => {
        alert("Great Shoot!");
    }

    return (
        <button onclick={shoot}>Take the shot!</button>
    );
}

const root = ReactDOM.createroot(document.getElementById('root'));
root.render(<Football />);