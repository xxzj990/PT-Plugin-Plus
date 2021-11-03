/**
 * 这是一个由 PTPP 内部调用的 Fake BtClient
 * 目的是用作种子下载客户端
 * 所以仅允许使用该实例的 getRemoteTorrentFile 方法
 */
import {
  CTorrent,
  BittorrentClientBaseConfig,
  TorrentClientMetaData, TorrentClientStatus
} from '../types';
import AbstractBittorrentClient from '@/resource/btClients/AbstractBittorrentClient';

export const clientConfig: BittorrentClientBaseConfig = {
  uuid: '4e77732b-b840-4bc4-9d60-f9c7ace65dda',
  name: 'Local',
  type: 'Local',
  address: 'file://fakepath'
};

export const clientMetaData: TorrentClientMetaData = {
  description: '这是一个供PTPP内部调用的Fake BtClient，目的是用作种子下载客户端',
  feature: {
    CustomPath: { allowed: false }
  }
};

export default class Local extends AbstractBittorrentClient {
  readonly version = 'v0.0.1';

  async ping (): Promise<boolean> {
    return true;
  }

  async getClientStatus (): Promise<TorrentClientStatus> {
    throw new Error('Not Support');
  }

  addTorrent (): Promise<boolean> {
    throw new Error('Not Support');
  }

  getAllTorrents (): Promise<CTorrent[]> {
    throw new Error('Not Support');
  }

  pauseTorrent (): Promise<boolean> {
    throw new Error('Not Support');
  }

  removeTorrent (): Promise<boolean> {
    throw new Error('Not Support');
  }

  resumeTorrent (): Promise<boolean> {
    throw new Error('Not Support');
  }
}
