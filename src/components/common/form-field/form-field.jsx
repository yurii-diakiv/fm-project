import { useController } from 'react-hook-form';

const FormField = ({ component: Component, name, control, ...rest }) => {
    const { field } = useController({ name, control });

    return <Component field={field} {...rest} />;
};

export default FormField;
