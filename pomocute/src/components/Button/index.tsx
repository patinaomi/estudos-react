import React from "react";

class Button extends React.Component {
    render() {
        const estaAtivo = false; 
        const styles = {
            backgroundColor: estaAtivo ? "green" : "red"
        }
        return (
            <button style={styles}>
                Button
            </button>
        )
    }

}

export default Button;