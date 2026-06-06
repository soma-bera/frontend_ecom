function Home() {
  return (
    <main
      style={{
        padding: "40px",
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
      }}
    >
      <section
        style={{
          textAlign: "center",
          padding: "60px 20px",
          backgroundColor: "white",
          borderRadius: "10px",
          marginBottom: "30px",
        }}
      >
        <h1>🛒 Welcome to ShopEasy</h1>

        <p
          style={{
            marginTop: "10px",
            color: "#555",
          }}
        >
          Find the best products at the best prices.
        </p>

        <button
          style={{
            marginTop: "20px",
            padding: "12px 25px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Shop Now
        </button>
      </section>

      <section>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Featured Products
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              width: "200px",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <h3>Headphones</h3>
            <p>₹1,999</p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              width: "200px",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <h3>Smart Watch</h3>
            <p>₹3,499</p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              width: "200px",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <h3>Wireless Mouse</h3>
            <p>₹799</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;