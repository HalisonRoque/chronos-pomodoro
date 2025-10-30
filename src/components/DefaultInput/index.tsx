import styles from './styles.module.css';

// o react pode pegar o compontes de uma tag para usar como parametros
type DefaultInputPros = {
  id: string;
  labelText?: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({ id, type, labelText, ...rest }: DefaultInputPros) {
  return (
    <>
      {labelText &&
        <label htmlFor={id}>{labelText}</label>
        }
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
}