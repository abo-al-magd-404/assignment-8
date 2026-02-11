export const globalErrorHandling = (error, req, res, next) => {
  const status = error.cause?.status ?? error.status ?? 500;

  return res.status(status).json({
    success: false,
    error: {
      message:
        status === 500
          ? "something went wrong"
          : (error.message ?? "something went wrong"),

      ...(process.env.NODE_ENV === "development" && {
        stack: error.stack?.split("\n").map((line) => line.trim()),
      }),
    },
  });
};

export const ErrorException = ({
  message = "Fail",
  status = 400,
  extra = undefined,
}) => {
  throw new Error(message, { cause: { status, extra } });
};

export const conflictException = ({
  message = "conflict",
  extra = undefined,
}) => {
  return ErrorException({ message, status: 409, extra });
};

export const NotFoundException = ({
  message = "NotFound",
  extra = undefined,
}) => {
  return ErrorException({ message, status: 404, extra });
};
