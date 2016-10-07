import React, { Component } from 'react'
import classnames from 'classnames'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../../actions/actionsTypes'

import styles from './index.scss'

const FILTER_TITLES = {
  [SHOW_ALL]: '全部',
  [SHOW_ACTIVE]: '进行中',
  [SHOW_COMPLETED]: '已完成'
}

export default class Footer extends Component {
  renderFilterLink(filter) {
    const title = FILTER_TITLES[filter]
    const { selectedFilter, onShow } = this.props
    return (
      <a
        className={classnames({ [styles.selected]: filter === selectedFilter})}
        onClick={() => onShow(filter)}
      >
        {title}
      </a>
    )
  }

  render() {
    return (
      <footer className={styles.footer}>
        <ul className={"space-between " + styles.filters}>
          {[SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE].map(item =>
            <li key={item}>
              {this.renderFilterLink(item)}
            </li>
          )}
        </ul>
      </footer>
    )
  }
}