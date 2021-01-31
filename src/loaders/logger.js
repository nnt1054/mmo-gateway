import winston from 'winston';
import config from '/config';

var options = {
  file: {
    filename: 'error.log',
    level: 'error'
  },
  combined_file: {
    filename: 'combined.log'
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
    format: winston.format.simple(),
  },
};

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.File(options.combined_file),
    new winston.transports.Console(options.console),
  ],
});

// ONLY IF USING morgan('combined', { stream: logger.stream }) FOR HTTP LOGS
// logger.stream = {
//   write: function(message, encoding) {
//     // use the 'info' log level so the output will be picked up by both transports (file and console)
//     logger.info(message);
//   },
// };

export default logger;