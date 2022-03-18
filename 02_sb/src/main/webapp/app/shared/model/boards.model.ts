export type BoardListItem = {
  boardId: number
  boardTitle: string
  boardContents: string
  delYn: string
  createdDate: string
  modifiedDate: string | null
  deletedDate: string | null
  ownerId: string
  deleterId: number | null
  updaterId: number | null
}

export interface IGetBoards {
  total: number
  list: BoardListItem[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prevPage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

export type GetBoardsParam = {
  pageNum: number
  pageSize: number
}

export type PostBoardParam = {
  boardContents: string
  boardId: number
  boardTitle: string
  createdDate: string
  delYn: string
  ownerId: string
}
