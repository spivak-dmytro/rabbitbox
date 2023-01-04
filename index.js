import saga from './saga';
// helpers
import msgActionValidator from "./helpers/msgActionValidator";

export default {
  ...saga,
  helpers: {
    msgActionValidator,
  }
};
