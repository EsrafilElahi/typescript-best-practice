interface NewDocButtonProps extends React.HTMLAttributes<HTMLElementButton> {
  disabled?: boolean
}  

const Home = () => {
  return <NewDocButton disabled={false} aria-label="my-btn" />
}

const NewDocButton: Reacr.FC<NewDocButtonProps> = ({disabled, ...props}) => {
  return (
    <button disabled={disabled} {...props}>
      click me
    </button>
  )
}
