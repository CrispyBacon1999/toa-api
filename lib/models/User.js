"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TOAUser {
    constructor() {
        this.firebaseUser = null;
    }
    toJSON() {
        return {
            uid: this.uid,
            email: this.email,
            emailVerified: this.emailVerified,
            phoneNumber: this.phoneNumber,
            displayName: this.displayName,
            photoURL: this.photoURL,
            disabled: this.disabled,
            metadata: this.metadata,
            level: this.level,
            team: this.team,
            api_key: this.apiKey,
            favorite_teams: this.favoriteTeams,
            favorite_events: this.favoriteEvents,
            admin_events: this.adminEvents,
            individual_admin_events: this.individualAdminEvents,
            events_api_keys: this.eventsApiKeys,
            admin_regions: this.adminRegions,
            admin_teams: this.adminTeams,
            email_linked: this.emailLinked,
            google_linked: this.googleLinked,
            github_linked: this.githubLinked,
            phone_linked: this.phoneLinked,
            is_dev: this.isDev
        };
    }
    fromJSON(json) {
        const user = new TOAUser();
        user.uid = json.uid;
        user.email = json.email;
        user.emailVerified = json.emailVerified;
        user.phoneNumber = json.phoneNumber;
        user.displayName = json.displayName;
        user.photoURL = json.photoURL;
        user.disabled = json.disabled;
        user.metadata = json.metadata;
        user.level = json.level || 1;
        user.team = json.team;
        user.apiKey = json.api_key;
        user.favoriteTeams = json.favorite_teams || [];
        user.favoriteEvents = json.favorite_events || [];
        user.adminEvents = json.admin_events || [];
        user.individualAdminEvents = json.individual_admin_events || [];
        user.eventsApiKeys = json.events_api_keys;
        user.adminRegions = json.admin_regions || [];
        user.adminTeams = json.admin_teams || [];
        user.emailLinked = json.email_linked;
        user.googleLinked = json.google_linked;
        user.githubLinked = json.github_linked;
        user.phoneLinked = json.phone_linked;
        user.isDev = json.is_dev;
        return user;
    }
    summary(regions) {
        const roles = [];
        const regionsMap = {};
        for (const region of regions) {
            regionsMap[region.regionKey] = region.description;
        }
        if (this.level === 6) {
            roles.push('TOA Admin');
        }
        else if (this.level === 5) {
            roles.push('Moderator');
        }
        else if (this.level > 1) {
            roles.push('Level ' + this.level);
        }
        if (this.isDev) {
            roles.push('Developer');
        }
        if (this.team) {
            roles.push('Member of #' + this.team);
        }
        if (this.adminRegions.length > 0 || this.individualAdminEvents.length > 0) {
            let txt = 'Admin of ' + this.adminRegions.map(key => regionsMap[key] || key).join(' ');
            if (this.adminRegions.length > 0 && this.individualAdminEvents.length > 0) {
                txt += ' and ';
            }
            txt += this.individualAdminEvents.length + ' events';
            roles.push(txt);
        }
        if (this.adminTeams.length > 0) {
            roles.push('Manager of #' + this.adminTeams.join(' #'));
        }
        return roles.length === 0 ? this.email : roles.join(' | ');
    }
}
exports.default = TOAUser;
