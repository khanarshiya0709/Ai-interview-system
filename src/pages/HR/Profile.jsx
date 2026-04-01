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

    // profile holds the "saved" data
    const [profile, setProfile] = useState(currentUser);
    // formData holds the "in-progress" edits
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
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
            <div className="max-w-5xl mx-auto p-4 sm:p-6 space-y-8">

                {/* Header */}
                <div className="relative">
                    <div className="absolute inset-0 h-32 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-lg" />

                    <div className="relative flex flex-col sm:flex-row justify-between gap-6">

                        <div className="flex gap-6">
                            <div className="space-y-2">
                                <img
                                    src={isEditing ? formData.avatar : profile.avatar}
                                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl object-cover border-4 border-background shadow-lg"
                                />
                                {isEditing && (
                                    <div className="flex items-center gap-2">
                                        <ImageIcon className="w-4 h-4 text-muted-foreground" />
                                        <Input
                                            placeholder="Image URL"
                                            className="h-8 text-xs"
                                            value={formData.avatar}
                                            onChange={(e) => handleChange('avatar', e.target.value)}
                                        />
                                    </div>
                                )}
                            </div>

                            <div>
                                {isEditing ? (
                                    <div className="space-y-2">
                                        <Input
                                            value={formData.name}
                                            onChange={(e) => handleChange('name', e.target.value)}
                                        />
                                        <Input value={profile.title} disabled />
                                    </div>
                                ) : (
                                    <>
                                        <h1 className="text-3xl font-bold">{profile.name}</h1>
                                        <p className="text-primary">{profile.title}</p>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            Joined March 2026
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="flex gap-2 items-start">
                            {isEditing ? (
                                <>
                                    <Button onClick={handleSave}>
                                        <Save className="w-4 h-4 mr-2" />
                                        Save Changes
                                    </Button>
                                    <Button variant="outline" onClick={handleCancel}>
                                        <X className="w-4 h-4 mr-2" />
                                        Cancel
                                    </Button>
                                </>
                            ) : (
                                <Button variant="outline" onClick={() => setIsEditing(true)}>
                                    <Edit2 className="w-4 h-4 mr-2" />
                                    Edit
                                </Button>
                            )}

                            {/* Dropdown remains visible in both modes */}
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline">
                                        <MoreVertical className="w-4 h-4" />
                                    </Button>
                                </DropdownMenuTrigger>

                                <DropdownMenuContent>
                                    <DropdownMenuItem onClick={() => setShowLogoutDialog(true)}>
                                        <LogOut className="w-4 h-4 mr-2" />
                                        Logout
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>

                    </div>
                </div>

                {/* Main Content (Tabs Removed) */}
                <div className="space-y-6">
                    <Card className="p-6">
                        <h2 className="font-bold mb-4">Contact</h2>

                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-muted-foreground" />
                                {isEditing ? (
                                    <Input
                                        value={formData.email}
                                        onChange={(e) => handleChange('email', e.target.value)}
                                    />
                                ) : (
                                    <span>{profile.email}</span>
                                )}
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-muted-foreground" />
                                {isEditing ? (
                                    <Input
                                        value={formData.phone}
                                        onChange={(e) => handleChange('phone', e.target.value)}
                                    />
                                ) : (
                                    <span>{profile.phone}</span>
                                )}
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-muted-foreground" />
                                {isEditing ? (
                                    <Input
                                        value={formData.location}
                                        onChange={(e) => handleChange('location', e.target.value)}
                                    />
                                ) : (
                                    <span>{profile.location}</span>
                                )}
                            </div>
                        </div>
                    </Card>

                    <Card className="p-6">
                        <h2 className="font-bold mb-2">About</h2>
                        {isEditing ? (
                            <textarea
                                value={formData.bio}
                                onChange={(e) => handleChange('bio', e.target.value)}
                                className="w-full border p-2 rounded bg-background min-h-[100px] focus:ring-2 focus:ring-primary outline-none"
                            />
                        ) : (
                            <p className="text-muted-foreground">{profile.bio}</p>
                        )}
                    </Card>
                </div>

                {/* Logout Dialog */}
                <AlertDialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Logout</AlertDialogTitle>
                            <AlertDialogDescription>
                                Are you sure you want to logout?
                            </AlertDialogDescription>
                        </AlertDialogHeader>

                        <div className="flex justify-end gap-2">
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>Logout</AlertDialogAction>
                        </div>
                    </AlertDialogContent>
                </AlertDialog>

            </div>
        </div>
    );
}