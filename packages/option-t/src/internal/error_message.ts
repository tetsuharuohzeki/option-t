const ERR_MSG_MUST_NOT_RETURN = ' must not return ';

const TRANSFORM_FUNCTION_NAME = '`transformer`';
const RECOVERY_FUNCTION_NAME = '`recoverer`';
const DEFAULT_VALUE_NAME = '`defaultValue`';

export const ERR_MSG_TRANSFORMER_MUST_NOT_RETURN =
    TRANSFORM_FUNCTION_NAME + ERR_MSG_MUST_NOT_RETURN;
export const ERR_MSG_CALLED_WITH = 'called with ';
export const ERR_MSG_DEFAULT_VALUE_MUST_NOT_BE = DEFAULT_VALUE_NAME + ' must not be ';
export const ERR_MSG_RECOVERER_MUST_NOT_RETURN = RECOVERY_FUNCTION_NAME + ERR_MSG_MUST_NOT_RETURN;

const MSG_BUILTIN_ERROR_INSTANCE = '`Error` instance.';

export const ERR_MSG_THROWN_VALUE_IS_NOT_BUILTIN_ERROR_INSTANCE =
    'The thrown value is not an ' + MSG_BUILTIN_ERROR_INSTANCE;

export const ERR_MSG_CONTAINED_TYPE_E_SHOULD_BE_BUILTIN_ERROR_INSTANCE =
    'The contained E should be ' + MSG_BUILTIN_ERROR_INSTANCE;

export const ERR_MSG_INPUT_IS_FROZEN_NOT_CAST_TO_MUTABLE =
    'input is frozen, cannot cast to mutable';

export const ERR_MSG_INPUT_MUST_BE_TUPLE_ARRAY = 'input must be tuple array';
