import React from "react";
import { Button, Card, Row, Col } from "react-bootstrap/";

const productos = [
    {
        id: 0,
        img: "https://images-ext-1.discordapp.net/external/gPl0U-9xL2JSu17svpFvXmKC1g3l9xzwPeDdx84NHHI/%3Fq%3Dtbn%3AANd9GcSrfKazC9rzdjI4bPASRH5vK-ovTijYv3aNpA%26usqp%3DCAU/https/encrypted-tbn0.gstatic.com/images",
        title: "Placa de video Gigabyte",
        description: "La mejor placa de video.",
    },
    {
        id: 1,
        img: "https://images-ext-2.discordapp.net/external/r3WSl2ZV4tle02fPhthkJQA313O31KZLfHkEjQ0g5yA/%3Fq%3Dtbn%3AANd9GcTS3Yklt5RbhleoInOypWA4ngdrP_2PMt9KiA%26usqp%3DCAU/https/encrypted-tbn0.gstatic.com/images",
        title: "Placa de video AFOX",
        description: "Otra placa pero mejor.",
    },
    {
        id: 2,
        img: "https://images-ext-1.discordapp.net/external/gPl0U-9xL2JSu17svpFvXmKC1g3l9xzwPeDdx84NHHI/%3Fq%3Dtbn%3AANd9GcSrfKazC9rzdjI4bPASRH5vK-ovTijYv3aNpA%26usqp%3DCAU/https/encrypted-tbn0.gstatic.com/images",
        title: "Placa de video Gigabyte",
        description: "Otra placa mas.",
    },
    {
        id: 3,
        img: "https://images-ext-2.discordapp.net/external/r3WSl2ZV4tle02fPhthkJQA313O31KZLfHkEjQ0g5yA/%3Fq%3Dtbn%3AANd9GcTS3Yklt5RbhleoInOypWA4ngdrP_2PMt9KiA%26usqp%3DCAU/https/encrypted-tbn0.gstatic.com/images",
        title: "Placa de video AFOX",
        description: "Una placa unica.",
    },
    {
        id: 4,
        img: "https://images-ext-1.discordapp.net/external/gPl0U-9xL2JSu17svpFvXmKC1g3l9xzwPeDdx84NHHI/%3Fq%3Dtbn%3AANd9GcSrfKazC9rzdjI4bPASRH5vK-ovTijYv3aNpA%26usqp%3DCAU/https/encrypted-tbn0.gstatic.com/images",
        title: "Placa de video Gigabyte",
        description: "La mejor placa de video.",
    },
    {
        id: 5,
        img: "https://images-ext-2.discordapp.net/external/r3WSl2ZV4tle02fPhthkJQA313O31KZLfHkEjQ0g5yA/%3Fq%3Dtbn%3AANd9GcTS3Yklt5RbhleoInOypWA4ngdrP_2PMt9KiA%26usqp%3DCAU/https/encrypted-tbn0.gstatic.com/images",
        title: "Placa de video AFOX",
        description: "Otra placa pero mejor.",
    },
    {
        id: 6,
        img: "https://images-ext-1.discordapp.net/external/gPl0U-9xL2JSu17svpFvXmKC1g3l9xzwPeDdx84NHHI/%3Fq%3Dtbn%3AANd9GcSrfKazC9rzdjI4bPASRH5vK-ovTijYv3aNpA%26usqp%3DCAU/https/encrypted-tbn0.gstatic.com/images",
        title: "Placa de video Gigabyte",
        description: "Otra placa mas.",
    },
    {
        id: 7,
        img: "https://images-ext-2.discordapp.net/external/r3WSl2ZV4tle02fPhthkJQA313O31KZLfHkEjQ0g5yA/%3Fq%3Dtbn%3AANd9GcTS3Yklt5RbhleoInOypWA4ngdrP_2PMt9KiA%26usqp%3DCAU/https/encrypted-tbn0.gstatic.com/images",
        title: "Placa de video AFOX",
        description: "Una placa unica.",
    },
];

export default function Products() {
    return (
        <div className="d-flex justify-content-center text-center mt-5">
            <Row xs={1} md={2} lg={3} xl={4}>
                {productos.map((element) => (
                    <Col className="d-flex justify-content-center">
                        <div key={element.id} className="m-3">
                            <Card style={{ width: "18rem" }}>
                                <Card.Img variant="top" src={element.img} />
                                <Card.Body>
                                    <Card.Title>{element.title}</Card.Title>
                                    <hr />
                                    <Card.Text>{element.description}</Card.Text>
                                    <Button className="w-100" variant="danger">
                                        Comprar
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
}