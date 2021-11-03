import { ISearchFilter, ISearchResult, ISiteMetadata, ITorrent } from '../../types';
import urlparse from 'url-parse';
import Gazelle from '../schema/Gazelle';

export const siteMetadata: ISiteMetadata = {
  name: 'AB',
  timezoneOffset: '+0000',
  description: '动漫',
  url: 'https://animebytes.tv/',
  tags: ['动漫'],
  schema: 'Gazelle',
  host: 'animebytes.tv',
  userInfo: {
    selectors: {
      id: {
        selector: ['#stats_menu > a:first'],
        attr: 'href',
        filters: [
          (query: string) => parseInt(urlparse(query, true).query.userid || '')
        ]
      },
      name: {
        selector: ['a.username:first']
      },

      uploaded: {
        selector: ["dt:contains('Uploaded:') + dd > span"],
        attr: 'title',
        filters: [(query:string) => query.replace(/,/g, ''), parseFloat]
      },
      downloaded: {
        selector: ["dt:contains('Downloaded:') + dd > span"],
        attr: 'title',
        filters: [(query:string) => query.replace(/,/g, ''), parseFloat]
      },
      ratio: {
        selector: ["dt:contains('Ratio:') + dd > span"],
        attr: 'title',
        filters: [(query:string) => query.replace(/,/g, '')]
      },
      seeding: {
        selector: ["dt:contains('Seeding:') + dd"],
        filters: [{ name: 'parseNumber' }]
      },
      seedingSize: {
        selector: ["dt:contains('Total seed size:') + dd > span"],
        filters: [{ name: 'parseSize' }]
      },
      levelName: {
        selector: ["dt:contains('Class:') + dd"]
      },
      bonus: {
        selector: ['#yen_count > a'],
        filters: [(query:string) => query.replace(/,|\n|\s+|¥/g, '')]
      },
      joinTime: {
        selector: ["dt:contains('Joined:') + dd > span"]
      }
    }
  },
  feature: {
    searchTorrent: false
  }
};
