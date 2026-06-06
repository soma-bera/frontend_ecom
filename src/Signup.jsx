function Signup() {
  return (
    <>
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f4f4f4",
      }}
    >
      <section
        style={{
          width: "400px",
          padding: "30px",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
          Create Account
        </h1>

        <p
          style={{
            textAlign: "center",
            marginBottom: "25px",
          }}
        >
          Sign up to get started
        </p>

        <form>
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="fullname"
              style={{ display: "block", marginBottom: "8px" }}
            >
              Full Name
            </label>

            <input
              type="text"
              id="fullname"
              placeholder="Enter your full name"
              required
              style={{
                width: "100%",
                padding: "10px",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="email"
              style={{ display: "block", marginBottom: "8px" }}
            >
              Email Address
            </label>

            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              style={{
                width: "100%",
                padding: "10px",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="password"
              style={{ display: "block", marginBottom: "8px" }}
            >
              Password
            </label>

            <input
              type="password"
              id="password"
              placeholder="Create a password"
              required
              style={{
                width: "100%",
                padding: "10px",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ marginBottom: "25px" }}>
            <label
              htmlFor="confirmPassword"
              style={{ display: "block", marginBottom: "8px" }}
            >
              Confirm Password
            </label>

            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              required
              style={{
                width: "100%",
                padding: "10px",
                boxSizing: "border-box",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Sign Up
          </button>
        </form>

        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Already have an account? <a href="#">Sign In</a>
        </p>
      </section>
    </main>
    </>
  );
}

export default Signup;