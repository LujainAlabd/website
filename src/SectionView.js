import Grid from "@material-ui/core/Grid";

export default function SectionView({ title, List }) {
  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.16)",
        display: "flex",
        justifyContent: "center",
        borderRadius: 10,
        paddingTop: List.length * 25,
        paddingBottom: List.length * 25,
        paddingRight: 50,
        paddingLeft: 50,
        width: "80%",
        height: List.length * 80,
        flexDirection: "column",
      }}
    >
      <b
        style={{
          color: "white",
          textAlign: "flex-start",
          fontSize: 25,
          marginTop: 10,
          fontFamily: "serif",
          opacity: 0.7,
          alignSelf: "flex-end",
          marginBottom: 10,
        }}
      >
        {title}
      </b>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          alignItems: "flex-end",
          flexWrap: "wrap",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          rowSpacing={1}
        >
          {List.map((item) => (
            <RenderItem item={item} />
          ))}
        </Grid>
      </div>
    </div>
  );
}

const RenderItem = (item) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginRight: 5,
        marginLeft: 5,
        borderRadius: 5,
        borderBottom: "0.7px solid rgba(26, 98, 111, 1)",
        borderRight: "0.1px solid rgba(26, 98, 111, 1)",
        borderLeft: "0.1px solid rgba(26, 98, 111, 1)",
        width: "30.33%",
        marginTop: 30,
      }}
    >
      <div>
        <img height={200} width={"100%"} src={item.item.img} alt="logo" />
      </div>
      {item.item.soon ? (
        <b
          style={{
            position: "absolute",
            color: "white",
            fontSize: 30,
            textAlign: "center",
            marginLeft: 115,
            marginTop: 85,
          }}
        >
          قريبا
        </b>
      ) : null}
      <p style={{ textAlign: "center", color: "white" }}>{item.item.title}</p>
    </div>
  );
};
