import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    img {
      height: 2.5rem;
      width: 2.5rem;
    }

    strong {
      color: ${(props) => props.theme['gray-100']};
      font-size: 1.5rem;
    }
  }
`

export const NewTransactionButton = styled.button`
  height: 3.125rem;
  border: 0;
  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  font-size: 1rem;
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['green-700']};
    transition: background-color 0.2s;
  }
`
