import styled from 'styled-components'

export const Container = styled.article`
  width: 100%;
  height: 16.25rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray600};
  border: 2px solid ${({ theme }) => theme.colors.gray600};
  transition: 0.4s;
  padding: 2rem;

  &:hover {
    border-color: ${({ theme }) => theme.colors.gray400};
  }

  header {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.25rem;

    strong {
      flex: 1;
      font-size: ${({ theme }) => theme.textSizes.lg};
      color: ${({ theme }) => theme.colors.gray050};
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      line-clamp: 2;
    }

    span {
      width: max-content;
      font-size: ${({ theme }) => theme.textSizes.sm};
      color: ${({ theme }) => theme.colors.gray300};
    }
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    -webkit-box-orient: vertical;
    line-clamp: 4;
    word-wrap: break-word;
  }
`
