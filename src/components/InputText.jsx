export default function Input ({ label, value, onChange, type = "text", id, ...rest }) {
    function handleChange(e) {
        onChange(e.target.value);
    }

    return (
        <label htmlFor={id}>
            {label}
            {' '}
            <input  
                type={type}
                value={value}
                onChange={handleChange}
                id={id}
                {...rest}
            />
        </label>
    );
}