'use client'
import React from 'react'
import styled from '@emotion/styled'

const booksData = [
  { id: 1, title: '죄와 벌', author: '표도르 도스트옙스키' },
  { id: 2, title: '테메레르', author: '나오미 노빅' },
  { id: 3, title: '나니아 연대기', author: 'C. S. 루이스' },
  { id: 4, title: '율리시스 무어', author: '피에르도메니코 바칼라리오' },
  { id: 5, title: '해리 포터', author: 'J. K. 롤링' },
  { id: 6, title: '괴물', author: '김수진' },
]

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  font-family: sans-serif;
  margin-top: 1.5rem;

  th {
    background-color: #005f99;
    color: white;
    padding: 12px 16px;
    text-align: left;
    font-weight: 600;
  }

  td {
    padding: 12px 16px;
    border-bottom: 1px solid #e0e0e0;
    color: #222;
  }

  th:first-of-type,
  td:first-of-type {
    border-right: 1px solid #e0e0e0;
    width: 50%;
  }

  tbody tr:nth-of-type(even) {
    background-color: #f0f7ff;
  }

  tbody tr:nth-of-type(odd) {
    background-color: #ffffff;
  }

  tbody tr:hover {
    background-color: #d6eaff;
  }
`

export default function BookTable() {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>제목</th>
          <th>저자</th>
        </tr>
      </thead>
      <tbody>
        {booksData.map((book) => (
          <tr key={book.id}>
            <td>{book.title}</td>
            <td>{book.author}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  )
}

