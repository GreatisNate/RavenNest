import Requests from '@/requests';

export default class AdminService {

    private static requestCounter: number = 0;

    public static async updatePlayerName(userId: string, newName: string): Promise<boolean>{        
        ++AdminService.requestCounter;
        const url = `api/admin/updateplayername/${userId}/${newName}`;
        const result = await Requests.sendAsync(url);
        --AdminService.requestCounter;
        return result.ok && await result.json();
    }

    public static async updatePlayerStat(userId: string, statName: string, experience: number): Promise<boolean> {
        ++AdminService.requestCounter;
        const url = `api/admin/updateplayerskill/${userId}/${statName}/${experience}`;
        const result = await Requests.sendAsync(url);
        --AdminService.requestCounter;
        return result.ok && await result.json();
    }

}