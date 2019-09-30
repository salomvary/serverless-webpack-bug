import classnames from "classnames";
import compB from "comp-b";

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: classnames("hello", compB()),
        input: event
      },
      null,
      2
    )
  };
};
