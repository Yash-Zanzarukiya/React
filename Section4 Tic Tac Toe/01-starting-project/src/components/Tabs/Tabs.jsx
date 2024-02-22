export default function Tabs({ children, ButtonContent, Wrapper = 'main' }) {
  return (
    <>
      <Wrapper>
        {ButtonContent}
      </Wrapper>
      {children}
    </>
  );
}