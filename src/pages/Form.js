export const Form = () => {
  return (
    <div className="form-div">
      <form className="form-page">
        <input type="text" placeholder="Full Name..." />
        <input type="text" placeholder="Email..." />
        <input type="text" placeholder="Age..." />
        <input type="password" placeholder="Password..." />
        <input type="password" placeholder="Confirm Password..." />
        <input type="submit" />
      </form>
    </div>
  );
};