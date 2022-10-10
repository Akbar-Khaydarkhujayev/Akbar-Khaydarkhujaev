export const AlertDanger = (props) => {
  let classes = "alert alert-danger alert-dismissible fade hide";
  if (props.show) {
    classes = "alert alert-danger alert-dismissible fade show z-index-90";
  } else {
    classes = "alert alert-danger alert-dismissible fade hide";
  }
  return (
    <div className={classes} role="alert">
      <strong className="h5">The Product is already in Cart!</strong>
    </div>
  );
};
export const AlertSuccess = (props) => {
  let classes = "alert alert-success alert-dismissible fade hide";
  if (props.show) {
    classes = "alert alert-success alert-dismissible fade show z-index-90";
  } else {
    classes = "alert alert-success alert-dismissible fade hide";
  }
  return (
    <div className={classes} role="alert">
      <strong className="h5">The Product is added to Cart!</strong>
    </div>
  );
};
