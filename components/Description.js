import styles from './Description.module.css'

export default function Description({ text }) {
  return (
    <div
      className={styles.description}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  )
}
