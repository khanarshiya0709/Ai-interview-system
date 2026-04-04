import { useState } from 'react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
} from '../../components/ui/alert-dialog';
import { currentUser } from '../../lib/profile-data';
import {
    Mail, Phone, MapPin, Edit2, Save, X,
    LogOut, MoreVertical, Image as ImageIcon
} from 'lucide-react';

export default function ProfilePage() {
    const [isEditing, setIsEditing] = useState(false);
    const [showLogoutDialog, setShowLogoutDialog] = useState(false);

    const [profile, setProfile] = useState(currentUser);
    const [formData, setFormData] = useState(currentUser);

    const handleSave = () => {
        setProfile(formData);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setFormData(profile);
        setIsEditing(false);
    };

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="max-w-5xl mx-auto p-4 sm:p-6 space-y-8">

                {/* Header Section */}
                <div className="relative">
                    <div className="absolute inset-0 h-32 bg-gradient-to-r from-blue-100/50 via-blue-50/30 to-transparent rounded-lg border border-blue-100/20" />

                    <div className="relative flex flex-col sm:flex-row justify-between gap-6 px-2">

                        <div className="flex gap-6">
                            <div className="space-y-2">
                                <img
                                    src={isEditing ? formData.avatar : profile.avatar}
                                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl object-cover border-4 border-white shadow-xl"
                                    alt="Profile"
                                />
                                {isEditing && (
                                    <div className="flex items-center gap-2">
                                        <ImageIcon className="w-4 h-4 text-slate-400" />
                                        <Input
                                            placeholder="Image URL"
                                            className="h-8 text-xs focus-visible:border-blue-600"
                                            value={formData.avatar}
                                            onChange={(e) => handleChange('avatar', e.target.value)}
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="pt-2 sm:pt-8">
                                {isEditing ? (
                                    <div className="space-y-2 min-w-[200px]">
                                        <Input
                                            value={formData.name}
                                            className="focus-visible:border-blue-600"
                                            onChange={(e) => handleChange('name', e.target.value)}
                                        />
                                        <Input value={profile.title} disabled className="bg-slate-50 opacity-70" />
                                    </div>
                                ) : (
                                    <>
                                        <h1 className="text-3xl font-bold text-slate-900">{profile.name}</h1>
                                        <p className="text-blue-600 font-semibold">{profile.title}</p>
                                        <p className="text-sm text-slate-500 mt-1 font-medium">
                                            Joined March 2026
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="flex gap-2 items-start sm:pt-8">
                            {isEditing ? (
                                <>
                                    <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm">
                                        <Save className="w-4 h-4 mr-2" />
                                        Save Changes
                                    </Button>
                                    <Button variant="outline" onClick={handleCancel} className="border-slate-200 text-slate-600 hover:bg-slate-50">
                                        <X className="w-4 h-4 mr-2" />
                                        Cancel
                                    </Button>
                                </>
                            ) : (
                                <Button variant="outline" onClick={() => setIsEditing(true)} className="border-slate-200 text-slate-600 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200">
                                    <Edit2 className="w-4 h-4 mr-2" />
                                    Edit Profile
                                </Button>
                            )}

                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" className="border-slate-200 text-slate-400 hover:text-slate-600">
                                        <MoreVertical className="w-4 h-4" />
                                    </Button>
                                </DropdownMenuTrigger>

                                <DropdownMenuContent className="bg-white border-slate-200">
                                    <DropdownMenuItem onClick={() => setShowLogoutDialog(true)} className="text-red-600 focus:bg-red-50 focus:text-red-600">
                                        <LogOut className="w-4 h-4 mr-2" />
                                        Logout
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>

                    </div>
                </div>

                {/* Main Content Card */}
                <div className="grid gap-6">
                    <Card className="p-6 bg-white border-slate-200 shadow-sm">
                        <h2 className="font-bold mb-6 text-slate-900 flex items-center gap-2">
                            <span className="w-1 h-4 bg-blue-600 rounded-full" />
                            Contact Information
                        </h2>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Email</p>
                                    {isEditing ? (
                                        <Input
                                            value={formData.email}
                                            className="mt-1 focus-visible:border-blue-600"
                                            onChange={(e) => handleChange('email', e.target.value)}
                                        />
                                    ) : (
                                        <span className="text-slate-700 font-medium">{profile.email}</span>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Phone</p>
                                    {isEditing ? (
                                        <Input
                                            value={formData.phone}
                                            className="mt-1 focus-visible:border-blue-600"
                                            onChange={(e) => handleChange('phone', e.target.value)}
                                        />
                                    ) : (
                                        <span className="text-slate-700 font-medium">{profile.phone}</span>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Location</p>
                                    {isEditing ? (
                                        <Input
                                            value={formData.location}
                                            className="mt-1 focus-visible:border-blue-600"
                                            onChange={(e) => handleChange('location', e.target.value)}
                                        />
                                    ) : (
                                        <span className="text-slate-700 font-medium">{profile.location}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card className="p-6 bg-white border-slate-200 shadow-sm">
                        <h2 className="font-bold mb-4 text-slate-900 flex items-center gap-2">
                            <span className="w-1 h-4 bg-blue-600 rounded-full" />
                            About Me
                        </h2>
                        {isEditing ? (
                            <textarea
                                value={formData.bio}
                                onChange={(e) => handleChange('bio', e.target.value)}
                                className="w-full border border-slate-200 p-3 rounded-md bg-white min-h-[120px] focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all text-slate-700"
                            />
                        ) : (
                            <p className="text-slate-600 leading-relaxed font-medium">
                                {profile.bio}
                            </p>
                        )}
                    </Card>
                </div>

                {/* Logout Dialog */}
                <AlertDialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
                    <AlertDialogContent className="bg-white border-slate-200">
                        <AlertDialogHeader>
                            <AlertDialogTitle className="text-slate-900">Logout Session</AlertDialogTitle>
                            <AlertDialogDescription className="text-slate-500">
                                Are you sure you want to logout? You will need to login again to access your dashboard.
                            </AlertDialogDescription>
                        </AlertDialogHeader>

                        <div className="flex justify-end gap-3 mt-4">
                            <AlertDialogCancel className="border-slate-200 text-slate-600 hover:bg-slate-50">Cancel</AlertDialogCancel>
                            {/* Action is handled by your auth logic */}
                            <AlertDialogAction className="bg-red-600 hover:bg-red-700 text-white">Logout</AlertDialogAction>
                        </div>
                    </AlertDialogContent>
                </AlertDialog>

            </div>
        </div>
    );
}