import React from 'react';

const NovaPagina = () => {
    return (
        <div style={styles.container}>
            <h1>O grande miau voltou com um olho gigante </h1>
            <p style={styles.paragraph}>
              Estamos testando. Vamos lá ver como nos safamos. Bora bora. TDW vai correr bem
            </p>
            <img
                src="images/olho.png"
                style={styles.image}
            />
        </div>
    );
};

// Estilos inline para organizar o layout
const styles = {
    container: {
        textAlign: 'center',
        marginTop: '50px',
    },
    paragraph: {
        fontSize: '18px',
        color: '#555',
        margin: '20px 0',
    },
    image: {
        width: '400px',
        height: 'auto',
        borderRadius: '8px',
    }
};

export default NovaPagina;
