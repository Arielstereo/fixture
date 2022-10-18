import dbConnection from "../utils/database";
import Match1 from "../models/Match1";
import Layout from "../components/Layout";
import { Collapse, Text, Grid, Badge } from "@nextui-org/react";

const ResultMatch1 = ({ results }) => {
  return (
    <Layout>
      <h1 className="text-sky-400 text-6xl text-center font-bold my-32">
        Pronósticos - Fecha 1
      </h1>
      <div className="flex flex-wrap">
        <Grid.Container gap={2} className="mb-64">
          {results.map((item) => (
            <Grid key={item._id}>
              <Collapse.Group splitted>
                <Collapse
                  title={item.name + " " + item.surname}
                  className="uppercase text-xl font-bold w-96"
                >
                  <Text className="flex flex-col gap-4">
                    <div className="flex justify-around">
                      <span className="font-bold">Partido #1</span>
                      <Badge
                        enableShadow
                        disableOutline
                        color="success"
                        size="lg"
                      >
                        {item.checked}
                      </Badge>
                    </div>
                    <div className="flex justify-around">
                      <span className="font-bold">Partido #2</span>
                      <Badge
                        enableShadow
                        disableOutline
                        color="success"
                        size="lg"
                      >
                        {item.checked2}
                      </Badge>
                    </div>
                    <div className="flex justify-around">
                      <span className="font-bold">Partido #3</span>
                      <Badge
                        enableShadow
                        disableOutline
                        color="success"
                        size="lg"
                      >
                        {item.checked3}
                      </Badge>
                    </div>
                    <div className="flex justify-around">
                      <span className="font-bold">Partido #4</span>
                      <Badge
                        enableShadow
                        disableOutline
                        color="success"
                        size="lg"
                      >
                        {item.checked4}
                      </Badge>
                    </div>
                    <div className="flex justify-around">
                      <span className="font-bold">Partido #5</span>
                      <Badge
                        enableShadow
                        disableOutline
                        color="success"
                        size="lg"
                      >
                        {item.checked5}
                      </Badge>
                    </div>
                    <div className="flex justify-around">
                      <span className="font-bold">Partido #6</span>
                      <Badge
                        enableShadow
                        disableOutline
                        color="success"
                        size="lg"
                      >
                        {item.checked6}
                      </Badge>
                    </div>
                    <div className="flex justify-around">
                      <span className="font-bold">Partido #7</span>
                      <Badge
                        enableShadow
                        disableOutline
                        color="success"
                        size="lg"
                      >
                        {item.checked7}
                      </Badge>
                    </div>
                    <div className="flex justify-around">
                      <span className="font-bold">Partido #8</span>
                      <Badge
                        enableShadow
                        disableOutline
                        color="success"
                        size="lg"
                      >
                        {item.checked8}
                      </Badge>
                    </div>
                    <div className="flex justify-around">
                      <span className="font-bold">Partido #9</span>
                      <Badge
                        enableShadow
                        disableOutline
                        color="success"
                        size="lg"
                      >
                        {item.checked9}
                      </Badge>
                    </div>
                    <div className="flex justify-around">
                      <span className="font-bold">Partido #10</span>
                      <Badge
                        enableShadow
                        disableOutline
                        color="success"
                        size="lg"
                      >
                        {item.checked10}
                      </Badge>
                    </div>
                    <div className="flex justify-around">
                      <span className="font-bold">Partido #11</span>
                      <Badge
                        enableShadow
                        disableOutline
                        color="success"
                        size="lg"
                      >
                        {item.checked11}
                      </Badge>
                    </div>
                    <div className="flex justify-around">
                      <span className="font-bold">Partido #12</span>
                      <Badge
                        enableShadow
                        disableOutline
                        color="success"
                        size="lg"
                      >
                        {item.checked12}
                      </Badge>
                    </div>
                    <div className="flex justify-around">
                      <span className="font-bold">Partido #13</span>
                      <Badge
                        enableShadow
                        disableOutline
                        color="success"
                        size="lg"
                      >
                        {item.checked13}
                      </Badge>
                    </div>
                    <div className="flex justify-around">
                      <span className="font-bold">Partido #14</span>
                      <Badge
                        enableShadow
                        disableOutline
                        color="success"
                        size="lg"
                      >
                        {item.checked14}
                      </Badge>
                    </div>
                    <div className="flex justify-around">
                      <span className="font-bold">Partido #15</span>
                      <Badge
                        enableShadow
                        disableOutline
                        color="success"
                        size="lg"
                      >
                        {item.checked15}
                      </Badge>
                    </div>
                    <div className="flex justify-around">
                      <span className="font-bold">Partido #16</span>
                      <Badge
                        enableShadow
                        disableOutline
                        color="success"
                        size="lg"
                      >
                        {item.checked16}
                      </Badge>
                    </div>
                  
                  </Text>
                </Collapse>
              </Collapse.Group>
            </Grid>
          ))}
        </Grid.Container>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  try {
    await dbConnection();
    const res = await Match1.find({});
    const results = res.map((item) => {
      const result = item.toObject();
      result._id = item.id.toString();
      return result;
    });
    return { props: { results } };
  } catch (error) {
    console.log(error);
  }
}

export default ResultMatch1;
